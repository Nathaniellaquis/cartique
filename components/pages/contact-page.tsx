"use client"

import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            We're here to help. Reach out anytime.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="booking">Booking Question</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="supplier">Supplier Inquiry</SelectItem>
                      <SelectItem value="billing">Billing Issue</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={6}
                  />
                </div>

                <Button className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Email Support</CardTitle>
              </CardHeader>
              <CardContent className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">support@cartique.com</p>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">+1 (888) 234-5678</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri, 9am-6pm PST
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Chat with us</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Available 24/7 for urgent issues
                  </p>
                  <Button size="sm" variant="outline">Start Chat</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Office</CardTitle>
              </CardHeader>
              <CardContent className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Cartique HQ</p>
                  <p className="text-sm text-muted-foreground">
                    123 Luxury Lane<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
