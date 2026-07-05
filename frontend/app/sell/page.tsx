"use client"

import Navbar from "@/components/Navbar"
import DeliverySection from "@/components/sell/DeliverySection"
import MarketplaceSection from "@/components/sell/MarketplaceSection"
import PartInfoSection from "@/components/sell/PartInfoSection"
import PhotoUpload from "@/components/sell/PhotoUpload"
import PublishActions from "@/components/sell/PublishActions"
import VehicleSection from "@/components/sell/VehicleSection"
import axios from "axios"
import { useState } from "react"

export default function SellPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    make: "",
    model: "",
    year: "",
    price: "",
    condition: "used",
    image_url: "",
    oem_number: "",
    mileage: "",
    warranty: "",
    shipping_option: "",
    location: "",
  })

  const [uploading, setUploading] = useState(false)
  const [publishing, setPublishing] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploading(true)

      const uploadData = new FormData()
      uploadData.append("file", file)

      const response = await axios.post(
        "http://127.0.0.1:8000/parts/upload-image",
        uploadData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      setFormData((prev) => ({
        ...prev,
        image_url: response.data.image_url,
      }))
    } catch (error) {
      console.error(error)
      alert("Image upload failed")
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    if (!token) {
      alert("Please login first")
      return
    }

    try {
      setPublishing(true)

      await axios.post(
        "http://127.0.0.1:8000/parts/",
        {
          ...formData,
          year: Number(formData.year),
          price: Number(formData.price),
          mileage: formData.mileage ? Number(formData.mileage) : null,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      alert("Part published successfully!")
      window.location.href = "/parts"
    } catch (error: any) {
      console.error("Publish Error:", error)

      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        alert(JSON.stringify(error.response.data))
      } else {
        alert(error.message)
      }
    } finally {
      setPublishing(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <form onSubmit={handleSubmit}>
        <div className="px-6 py-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Seller Portal
              </p>

              <h1 className="mt-3 text-4xl font-black md:text-5xl">
                Publish Part
              </h1>

              <p className="mt-3 max-w-2xl text-zinc-400">
                Create a clear, professional listing buyers can trust.
              </p>
            </div>

            <div className="grid gap-6">
              <PhotoUpload
                imageUrl={formData.image_url}
                uploading={uploading}
                onUpload={handleImageUpload}
              />

              <VehicleSection
                formData={{
                  year: formData.year,
                  make: formData.make,
                  model: formData.model,
                }}
                onChange={handleChange}
              />

              <PartInfoSection
                formData={{
                  title: formData.title,
                  category: formData.category,
                  oem_number: formData.oem_number,
                  description: formData.description,
                }}
                onChange={handleChange}
              />

              <MarketplaceSection
                formData={{
                  condition: formData.condition,
                  mileage: formData.mileage,
                  price: formData.price,
                }}
                onChange={handleChange}
              />

              <DeliverySection
                formData={{
                  location: formData.location,
                  shipping_option: formData.shipping_option,
                  warranty: formData.warranty,
                }}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <PublishActions publishing={publishing} />
      </form>
    </main>
  )
}