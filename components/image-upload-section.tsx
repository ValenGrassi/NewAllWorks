"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, X, Eye, Download, Camera, CheckCircle } from "lucide-react"

interface UploadedImage {
  id: string
  file: File
  preview: string
  name: string
  size: string
  uploadDate: string
}

export function ImageUploadSection() {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }, [])

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const newImage: UploadedImage = {
            id: Math.random().toString(36).substr(2, 9),
            file,
            preview: e.target?.result as string,
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2) + " MB",
            uploadDate: new Date().toLocaleDateString(),
          }
          setUploadedImages((prev) => [...prev, newImage])
        }
        reader.readAsDataURL(file)
      }
    })
  }

  const removeImage = (id: string) => {
    setUploadedImages((prev) => prev.filter((img) => img.id !== id))
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Client Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Showcase Your Camera Installation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Upload examples of your camera installations to help potential clients visualize our professional work and
            attention to detail.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upload Area */}
          <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Installation Photos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`relative p-8 rounded-lg transition-colors ${
                  dragActive ? "bg-primary/5 border-primary" : "bg-muted/30 border-border hover:bg-muted/50"
                } border-2 border-dashed`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Drag & drop your images here</h3>
                  <p className="text-muted-foreground mb-4">or click to browse your files</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Button variant="outline" className="pointer-events-none bg-transparent">
                    Choose Files
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">Supports: JPG, PNG, GIF up to 10MB each</p>
                </div>
              </div>

              {/* Upload Guidelines */}
              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-foreground">Photo Guidelines:</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>High-resolution images showing camera placement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Before and after installation shots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Clean, professional lighting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Multiple angles of the installation</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uploaded Images */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Uploaded Images ({uploadedImages.length})</span>
                {uploadedImages.length > 0 && <Badge variant="secondary">{uploadedImages.length} files</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {uploadedImages.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    No images uploaded yet. Start by uploading your first installation photo.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {uploadedImages.map((image) => (
                    <div key={image.id} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <img
                        src={image.preview || "/placeholder.svg"}
                        alt={image.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground truncate">{image.name}</h4>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{image.size}</span>
                          <span>{image.uploadDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                          onClick={() => removeImage(image.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Example Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Example Installation Gallery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Retail Store Security",
                description: "Complete CCTV network installation",
                image: "/security-camera-retail-store.jpg",
              },
              {
                title: "Office Building Surveillance",
                description: "Multi-floor camera system",
                image: "/office-building-security-cameras.jpg",
              },
              {
                title: "Warehouse Monitoring",
                description: "Industrial-grade camera setup",
                image: "/warehouse-security-camera-installation.jpg",
              },
              {
                title: "Restaurant Security",
                description: "Kitchen and dining area coverage",
                image: "/restaurant-security-camera-system.jpg",
              },
              {
                title: "Parking Lot Surveillance",
                description: "Outdoor weatherproof cameras",
                image: "/parking-lot-security-cameras.jpg",
              },
              {
                title: "Medical Facility Security",
                description: "HIPAA-compliant camera system",
                image: "/medical-facility-security-cameras.jpg",
              },
            ].map((example, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">{example.title}</h4>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
