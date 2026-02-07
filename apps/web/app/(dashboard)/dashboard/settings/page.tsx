"use client";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Separator } from "@workspace/ui/components/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { DashboardShell } from "@/components/dashboard-shell";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-white">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your artist profile and account settings.
          </p>
        </div>
        <Separator className="my-6" />

        <div className="flex flex-col gap-8 md:flex-row">
          <aside className="md:w-1/4">
            <nav className="flex flex-col space-y-1">
              <Button
                variant="ghost"
                className="justify-start bg-muted hover:bg-muted text-white"
              >
                Profile
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover:bg-white/5 hover:text-white text-muted-foreground"
              >
                Account
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover:bg-white/5 hover:text-white text-muted-foreground"
              >
                Notifications
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover:bg-white/5 hover:text-white text-muted-foreground"
              >
                Display
              </Button>
            </nav>
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white">Profile</h3>
                <p className="text-sm text-muted-foreground">
                  This is how others will see you on the site.
                </p>
              </div>
              <Separator />

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
                    <AvatarFallback>CV</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change Avatar</Button>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="username" className="text-white">
                    Username
                  </Label>
                  <Input
                    id="username"
                    placeholder="Cyber Void"
                    className="text-white"
                  />
                  <p className="text-[0.8rem] text-muted-foreground">
                    This is your public display name.
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@cybervoid.net"
                    className="text-white bg-zinc-900/50"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bio" className="text-white">
                    Bio
                  </Label>
                  <textarea
                    id="bio"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-white shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about yourself"
                    defaultValue="Industrial techno from the depths of the net."
                  />
                </div>

                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Update profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
