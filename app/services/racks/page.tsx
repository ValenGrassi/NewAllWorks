import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Thermometer, Shield, Zap, CheckCircle, Phone, Settings } from "lucide-react"

export default function ServerRacksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Server className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Server Rack Installation & Setup
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Professional server rack solutions for data centers and IT infrastructure. From single racks to complete
              data center buildouts with proper cooling and power management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Settings className="w-5 h-5 mr-2" />
                Plan Your Setup
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Consult Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Server Rack Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete rack infrastructure from planning to implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Server className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Rack Installation</CardTitle>
                <CardDescription>Professional server rack setup and configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">42U standard racks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Cable management systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Seismic compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Thermometer className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cooling Systems</CardTitle>
                <CardDescription>Advanced cooling solutions for optimal performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Precision air conditioning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Hot/cold aisle containment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Temperature monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Power Management</CardTitle>
                <CardDescription>Reliable power distribution and backup systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">PDU installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">UPS integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Power monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rack Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Server Rack Types</h2>
            <p className="text-lg text-muted-foreground">Choose the right rack solution for your environment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Open Frame Racks</CardTitle>
                <CardDescription>Cost-effective solution for controlled environments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Height Options</span>
                    <span className="font-semibold">12U - 45U</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Depth</span>
                    <span className="font-semibold">600-1000mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Load Capacity</span>
                    <span className="font-semibold">Up to 1500kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best For</span>
                    <span className="font-semibold">Server rooms</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enclosed Cabinets</CardTitle>
                <CardDescription>Secure, climate-controlled server enclosures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Height Options</span>
                    <span className="font-semibold">18U - 47U</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Security</span>
                    <span className="font-semibold">Locking doors</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cooling</span>
                    <span className="font-semibold">Integrated fans</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best For</span>
                    <span className="font-semibold">Office environments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wall Mount Racks</CardTitle>
                <CardDescription>Space-saving solutions for smaller installations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Height Options</span>
                    <span className="font-semibold">6U - 15U</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mounting</span>
                    <span className="font-semibold">Wall bracket</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Access</span>
                    <span className="font-semibold">Swing-out design</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best For</span>
                    <span className="font-semibold">Small offices</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Installation Process</h2>
            <p className="text-lg text-muted-foreground">Professional rack installation in 6 phases</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Site Assessment",
                description: "Evaluate space, power, cooling, and structural requirements",
              },
              {
                step: "02",
                title: "Design Planning",
                description: "Create detailed rack layout and infrastructure design",
              },
              {
                step: "03",
                title: "Infrastructure Prep",
                description: "Install power, cooling, and network infrastructure",
              },
              {
                step: "04",
                title: "Rack Installation",
                description: "Professional rack assembly and positioning",
              },
              {
                step: "05",
                title: "Equipment Mounting",
                description: "Install and configure servers and network equipment",
              },
              {
                step: "06",
                title: "Testing & Documentation",
                description: "System testing and comprehensive documentation",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Data Center Standards</h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade installation following industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Security</h3>
              <p className="text-muted-foreground text-sm">Locking cabinets and access control integration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Climate Control</h3>
              <p className="text-muted-foreground text-sm">Precision cooling and environmental monitoring</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Power Redundancy</h3>
              <p className="text-muted-foreground text-sm">Dual power feeds and UPS backup systems</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Cable Management</h3>
              <p className="text-muted-foreground text-sm">Organized cabling for easy maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our Rack Services?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Certified Technicians</h3>
                    <p className="text-muted-foreground text-sm">Data center certified installation professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Industry Standards</h3>
                    <p className="text-muted-foreground text-sm">TIA-942 compliant installations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Quality Equipment</h3>
                    <p className="text-muted-foreground text-sm">Premium racks from leading manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Ongoing Support</h3>
                    <p className="text-muted-foreground text-sm">Maintenance and expansion services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Rack Configuration Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Facility Type</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Data Center</option>
                    <option>Server Room</option>
                    <option>Office Environment</option>
                    <option>Colocation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Number of Racks</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>1-5 racks</option>
                    <option>6-15 racks</option>
                    <option>16-30 racks</option>
                    <option>30+ racks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Rack Height</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>42U Standard</option>
                    <option>45U Extended</option>
                    <option>47U Full Height</option>
                    <option>Mixed Heights</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Power Requirements</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Standard (up to 5kW)</option>
                    <option>Medium (5-15kW)</option>
                    <option>High (15-30kW)</option>
                    <option>Very High (30kW+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Special Requirements</label>
                  <textarea
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    rows={3}
                    placeholder="Cooling, security, compliance requirements..."
                  ></textarea>
                </div>
                <Button className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Request Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
