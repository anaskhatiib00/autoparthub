import json
import os

from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException
from openai import OpenAI
from pydantic import BaseModel

load_dotenv()

router = APIRouter(prefix="/ai", tags=["AI"])

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


class AISearchRequest(BaseModel):
    query: str


@router.post("/part-search")
def ai_part_search(request: AISearchRequest):
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": """
You extract vehicle part search details from user text.
Return ONLY valid JSON with:
make, model, year, part, side, condition.
Use null if unknown.
""",
                },
                {
                    "role": "user",
                    "content": request.query,
                },
            ],
        )

        content = response.choices[0].message.content
        return json.loads(content)

    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))