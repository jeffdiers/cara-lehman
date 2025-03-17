"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ThemeTestPage() {
  return (
    <div className="min-h-screen bg-background p-4 text-foreground md:p-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Theme Variables Test</h1>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="mb-8 grid grid-cols-4">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="charts">Charts & Sidebar</TabsTrigger>
        </TabsList>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-8">
          <section>
            <h2 className="mb-4">Background & Foreground</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ColorCard
                name="background"
                cssVar="--background"
                textVar="--foreground"
              />
              <ColorCard
                name="foreground"
                cssVar="--foreground"
                textVar="--background"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4">Primary & Secondary</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <ColorCard
                name="primary"
                cssVar="--primary"
                textVar="--primary-foreground"
              />
              <ColorCard
                name="primary-foreground"
                cssVar="--primary-foreground"
                textVar="--primary"
              />
              <ColorCard
                name="secondary"
                cssVar="--secondary"
                textVar="--secondary-foreground"
              />
              <ColorCard
                name="secondary-foreground"
                cssVar="--secondary-foreground"
                textVar="--secondary"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4">Muted & Accent</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <ColorCard
                name="muted"
                cssVar="--muted"
                textVar="--muted-foreground"
              />
              <ColorCard
                name="muted-foreground"
                cssVar="--muted-foreground"
                textVar="--muted"
              />
              <ColorCard
                name="accent"
                cssVar="--accent"
                textVar="--accent-foreground"
              />
              <ColorCard
                name="accent-foreground"
                cssVar="--accent-foreground"
                textVar="--accent"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4">Card & Popover</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <ColorCard
                name="card"
                cssVar="--card"
                textVar="--card-foreground"
              />
              <ColorCard
                name="card-foreground"
                cssVar="--card-foreground"
                textVar="--card"
              />
              <ColorCard
                name="popover"
                cssVar="--popover"
                textVar="--popover-foreground"
              />
              <ColorCard
                name="popover-foreground"
                cssVar="--popover-foreground"
                textVar="--popover"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4">Border, Input & Ring</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <ColorCard
                name="border"
                cssVar="--border"
                textVar="--foreground"
              />
              <ColorCard name="input" cssVar="--input" textVar="--foreground" />
              <ColorCard name="ring" cssVar="--ring" textVar="--foreground" />
            </div>
          </section>
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-8">
          <section>
            <h2 className="mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          <section>
            <h2 className="mb-4">Cards</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description text</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Card content goes here. This demonstrates the card
                    background and text colors.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="mb-4">Form Elements</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="input" className="text-sm font-medium">
                  Input
                </label>
                <Input id="input" placeholder="Input placeholder" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4">Badges</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </section>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-8">
          <section>
            <h2 className="mb-4">Headings</h2>
            <div className="space-y-4">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
            </div>
          </section>

          <section>
            <h2 className="mb-4">Paragraph & Inline Elements</h2>
            <div className="space-y-4">
              <p>
                This is a paragraph with <strong>bold text</strong>,{" "}
                <em>italic text</em>, and <code>code text</code>.
              </p>
              <p>
                Another paragraph with a{" "}
                <a href="#" className="text-primary underline">
                  link
                </a>
                .
              </p>
              <blockquote>This is a blockquote element.</blockquote>
              <small>This is small text.</small>
            </div>
          </section>

          <section>
            <h2 className="mb-4">Lists</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-2">Unordered List</h4>
                <ul className="list-disc space-y-2 pl-6">
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2">Ordered List</h4>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4">Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Director</td>
                    <td>Directing</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>Camera Operator</td>
                    <td>Camera Department</td>
                  </tr>
                  <tr>
                    <td>Alex Johnson</td>
                    <td>Editor</td>
                    <td>Post-Production</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>

        {/* Charts & Sidebar Tab */}
        <TabsContent value="charts" className="space-y-8">
          <section>
            <h2 className="mb-4">Chart Colors</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
              <ColorCard
                name="chart-1"
                cssVar="--chart-1"
                textVar="--background"
              />
              <ColorCard
                name="chart-2"
                cssVar="--chart-2"
                textVar="--background"
              />
              <ColorCard
                name="chart-3"
                cssVar="--chart-3"
                textVar="--background"
              />
              <ColorCard
                name="chart-4"
                cssVar="--chart-4"
                textVar="--background"
              />
              <ColorCard
                name="chart-5"
                cssVar="--chart-5"
                textVar="--background"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4">Sidebar Colors</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <ColorCard
                name="sidebar"
                cssVar="--sidebar"
                textVar="--sidebar-foreground"
              />
              <ColorCard
                name="sidebar-foreground"
                cssVar="--sidebar-foreground"
                textVar="--sidebar"
              />
              <ColorCard
                name="sidebar-primary"
                cssVar="--sidebar-primary"
                textVar="--sidebar-primary-foreground"
              />
              <ColorCard
                name="sidebar-primary-foreground"
                cssVar="--sidebar-primary-foreground"
                textVar="--sidebar-primary"
              />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ColorCard
                name="sidebar-accent"
                cssVar="--sidebar-accent"
                textVar="--sidebar-accent-foreground"
              />
              <ColorCard
                name="sidebar-accent-foreground"
                cssVar="--sidebar-accent-foreground"
                textVar="--sidebar-accent"
              />
              <ColorCard
                name="sidebar-border"
                cssVar="--sidebar-border"
                textVar="--sidebar-foreground"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4">Sidebar Example</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="col-span-1">
                <div className="h-[400px] rounded-lg border border-[var(--sidebar-border)] bg-[var(--sidebar)] p-4 text-[var(--sidebar-foreground)]">
                  <div className="mb-4 text-xl font-bold">Sidebar</div>
                  <Separator className="my-4 bg-[var(--sidebar-border)]" />
                  <div className="space-y-2">
                    <div className="rounded bg-[var(--sidebar-primary)] p-2 text-[var(--sidebar-primary-foreground)]">
                      Active Item
                    </div>
                    <div className="rounded p-2 hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]">
                      Menu Item 1
                    </div>
                    <div className="rounded p-2 hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]">
                      Menu Item 2
                    </div>
                    <div className="rounded p-2 hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]">
                      Menu Item 3
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="h-[400px] rounded-lg border border-border bg-background p-4 text-foreground">
                  <div className="mb-4 text-xl font-bold">Main Content</div>
                  <p>
                    This demonstrates how the sidebar would look next to your
                    main content.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface ColorCardProps {
  name: string;
  cssVar: string;
  textVar: string;
}

function ColorCard({ name, cssVar, textVar }: ColorCardProps) {
  return (
    <div
      className="overflow-hidden rounded-lg border"
      style={{
        backgroundColor: `var(${cssVar})`,
        color: `var(${textVar})`,
        borderColor: "var(--border)",
      }}
    >
      <div className="p-4">
        <div className="font-medium">{name}</div>
        <div className="text-sm opacity-80">{cssVar}</div>
      </div>
    </div>
  );
}
