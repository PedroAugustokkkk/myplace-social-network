import { Camera, Image, Video, Type, Hash, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TopNavigation } from "@/components/layout/top-navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

const Create = () => {
  return (
    <div className="min-h-screen bg-feed-background">
      <TopNavigation />
      
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Create Post</h1>
          <p className="text-text-secondary">Share your thoughts with the community</p>
        </div>

        <Card className="bg-surface border-border shadow-card mb-6">
          <CardContent className="p-6">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-text-primary">Alex Chen</div>
                <div className="text-sm text-text-secondary">@alexbuilds</div>
              </div>
            </div>

            {/* Text Area */}
            <Textarea 
              placeholder="What's happening in Web3?"
              className="min-h-[120px] border-0 resize-none text-lg placeholder:text-text-secondary bg-transparent focus-visible:ring-0 p-0"
            />

            {/* Media Upload Area */}
            <div className="mt-4 p-8 border-2 border-dashed border-border rounded-lg bg-surface-secondary/30 text-center">
              <Camera className="h-12 w-12 text-text-secondary mx-auto mb-2" />
              <p className="text-text-secondary mb-2">Drop photos or videos here</p>
              <Button variant="outline" size="sm">
                Choose Files
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Post Options */}
        <Card className="bg-surface border-border shadow-card mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-text-primary mb-4">Post Options</h3>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <Image className="h-5 w-5" />
                <span className="text-sm">Add Photo</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <Video className="h-5 w-5" />
                <span className="text-sm">Add Video</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">Add Location</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <Hash className="h-5 w-5" />
                <span className="text-sm">Add Topic</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Monetization Options */}
        <Card className="bg-surface border-border shadow-card mb-20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-text-primary mb-4">Monetization</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Type className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Enable Tips</div>
                    <div className="text-sm text-text-secondary">Allow followers to tip you</div>
                  </div>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Premium Content</div>
                    <div className="text-sm text-text-secondary">Require tokens to view</div>
                  </div>
                </div>
                <div className="w-12 h-6 bg-border rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Post Button */}
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-gradient-to-t from-feed-background to-transparent">
          <div className="container mx-auto max-w-2xl">
            <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90">
              Share Post
            </Button>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Create;