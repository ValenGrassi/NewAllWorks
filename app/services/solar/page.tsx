import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Zap, Battery, TrendingDown, CheckCircle, Phone, Calculator } from "lucide-react"

export default function SolarPanelsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Sun className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Commercial Solar Panel Installation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Reduce energy costs and carbon footprint with professional solar installations. From rooftop systems to
              ground-mounted arrays, we deliver sustainable energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Savings
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Solar Energy Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete solar installations tailored to your business energy needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Sun className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Rooftop Solar Systems</CardTitle>
                <CardDescription>Maximize roof space with high-efficiency solar panel installations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Monocrystalline panels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">25-year warranties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Weather-resistant mounting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Battery className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Energy Storage</CardTitle>
                <CardDescription>Battery backup systems for uninterrupted power supply</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Lithium-ion batteries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Smart energy management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Grid-tie capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Smart Monitoring</CardTitle>
                <CardDescription>Real-time performance tracking and optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Mobile app monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Performance analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Maintenance alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Go Solar?</h2>
            <p className="text-lg text-muted-foreground">Immediate and long-term benefits for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Reduce Energy Costs</h3>
              <p className="text-muted-foreground text-sm">Save 50-90% on electricity bills with solar power</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">$</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tax Incentives</h3>
              <p className="text-muted-foreground text-sm">Federal and state tax credits available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Environmental Impact</h3>
              <p className="text-muted-foreground text-sm">Reduce carbon footprint and support sustainability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">↗</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Property Value</h3>
              <p className="text-muted-foreground text-sm">Increase commercial property value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Solar Installation Process</h2>
            <p className="text-lg text-muted-foreground">From consultation to activation in 6 steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Site Assessment",
                description: "Evaluate roof condition, sun exposure, and energy usage patterns",
              },
              {
                step: "02",
                title: "System Design",
                description: "Custom solar system design optimized for your energy needs",
              },
              {
                step: "03",
                title: "Permits & Approvals",
                description: "Handle all permitting and utility interconnection paperwork",
              },
              {
                step: "04",
                title: "Installation",
                description: "Professional installation by certified solar technicians",
              },
              {
                step: "05",
                title: "Inspection",
                description: "Final inspection and system commissioning",
              },
              {
                step: "06",
                title: "Activation",
                description: "System activation and monitoring setup",
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

      {/* ROI Calculator Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Calculate Your Solar Savings</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Immediate Savings</h3>
                    <p className="text-muted-foreground text-sm">Start saving on electricity bills from day one</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">25-Year Warranty</h3>
                    <p className="text-muted-foreground text-sm">Long-term performance guarantees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Financing Options</h3>
                    <p className="text-muted-foreground text-sm">Flexible payment plans available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Professional Maintenance</h3>
                    <p className="text-muted-foreground text-sm">Ongoing system monitoring and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get Your Solar Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Business Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-border rounded-md bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Monthly Electric Bill</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>$100 - $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Roof Type</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Asphalt Shingle</option>
                    <option>Metal</option>
                    <option>Tile</option>
                    <option>Flat/Membrane</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Building Square Footage</label>
                  <input
                    type="number"
                    placeholder="e.g., 5000"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  />
                </div>
                <Button className="w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Savings
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
