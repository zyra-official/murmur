"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function AudioUploadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const audioData = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(audioData),
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setSubmitStatus("success");
    } catch (error) {
      console.error("Upload error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Upload Audio</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" required />
          </div>
          <div>
            <Label htmlFor="artist">Artist</Label>
            <Input id="artist" name="artist" required />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              name="duration"
              placeholder="e.g., 3:45"
              required
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select name="category" required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pop">Pop</SelectItem>
                <SelectItem value="rock">Rock</SelectItem>
                <SelectItem value="jazz">Jazz</SelectItem>
                <SelectItem value="classical">Classical</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="src">Audio File URL</Label>
            <Input
              id="src"
              name="src"
              type="text"
              placeholder="Enter audio file URL"
              required
            />
          </div>
          <div>
            <Label htmlFor="image">Cover Image URL</Label>
            <Input
              id="image"
              name="image"
              type="text"
              placeholder="Enter cover image URL"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Uploading..." : "Upload"}
          </Button>
        </form>
        {submitStatus === "success" && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded flex items-center">
            <CheckCircle2 className="mr-2" />
            Upload successful!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-4 p-2 bg-red-100 text-red-800 rounded flex items-center">
            <AlertCircle className="mr-2" />
            Upload failed. Please try again.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
