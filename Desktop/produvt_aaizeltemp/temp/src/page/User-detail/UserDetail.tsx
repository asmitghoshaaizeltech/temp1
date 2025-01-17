import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalendarIcon,
  EnvelopeIcon,
  UserIcon,
  Bars3BottomLeftIcon,
  // MoreVerticalIcon,
  PencilIcon,
  TrashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
// import { toast } from "@/components/ui/use-toast";

interface User {
  id: number;
  email: string;
  password: string; // Note: We won't display this, but it's part of the schema
  first_name: string;
  last_name: string;
  role_id: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

const sampleUser: User = {
  id: 1,
  email: "john.doe@example.com",
  password: "********", // Placeholder, never display actual password
  first_name: "John",
  last_name: "Doe",
  role_id: 2,
  deleted_at: null,
  created_at: "2023-01-15T10:00:00Z",
  updated_at: "2023-01-15T10:00:00Z",
};

const UserDetailPage: React.FC = () => {
  const [user, setUser] = useState<User>(sampleUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setUser((prev) => ({ ...prev, role_id: parseInt(value) }));
  };

  const handleSave = () => {
    // Here you would typically send the updated user data to your backend
    console.log("Saving user data:", user);
    setIsEditing(false);
    // toast({
    //   title: "Success",
    //   description: "User details updated successfully.",
    // });
  };

  const handleDelete = () => {
    // Here you would typically send a delete request to your backend
    console.log("Deleting user:", user.id);
    // toast({
    //   title: "User Deleted",
    //   description: "The user has been successfully deleted.",
    //   variant: "destructive",
    // });
  };

  const handleResetPassword = () => {
    // Here you would typically trigger a password reset process
    console.log("Resetting password for user:", user.id);
    // toast({
    //   title: "Password Reset",
    //   description: "A password reset link has been sent to the user's email.",
    // });
  };

  const getRoleName = (roleId: number) => {
    switch (roleId) {
      case 1:
        return "Admin";
      case 2:
        return "User";
      case 3:
        return "Guest";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="p-4 bg-white">
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader className="pb-4 border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              User Profile
            </CardTitle>
            <div className="flex items-center space-x-2">
              {isEditing ? (
                <>
                  <Button
                    onClick={handleSave}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    Save Changes
                  </Button>
                  <Button onClick={() => setIsEditing(false)} variant="outline">
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Edit Profile
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-10 w-10 p-0">
                    <span className="sr-only">Open menu</span>
                    <Bars3BottomLeftIcon className=" w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setIsEditing(true)}>
                    <PencilIcon className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleResetPassword}>
                    <LockClosedIcon className="mr-2 h-4 w-4" />
                    <span>Reset Password</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleDelete}
                    className="text-red-600"
                  >
                    <TrashIcon className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="text-center">
                <Avatar className="h-32 w-32 mx-auto">
                  <AvatarImage
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.first_name} ${user.last_name}`}
                  />
                  <AvatarFallback>
                    {user.first_name[0]}
                    {user.last_name[0]}
                  </AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                  {user.first_name} {user.last_name}
                </h2>
                <Badge variant="secondary" className="mt-2">
                  {getRoleName(user.role_id)}
                </Badge>
              </div>
            </div>
            <div className="md:w-2/3">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-2  bg-blue-900/20 ">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="account">Account Info</TabsTrigger>
                </TabsList>
                <TabsContent value="personal" className="mt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="first_name"
                          className="text-sm font-medium text-gray-700"
                        >
                          First Name
                        </Label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="first_name"
                            name="first_name"
                            value={user.first_name}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="last_name"
                          className="text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </Label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="last_name"
                            name="last_name"
                            value={user.last_name}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email
                      </Label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          value={user.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="account" className="mt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="role"
                        className="text-sm font-medium text-gray-700"
                      >
                        Role
                      </Label>
                      <Select
                        value={user.role_id.toString()}
                        onValueChange={handleRoleChange}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Admin</SelectItem>
                          <SelectItem value="2">User</SelectItem>
                          <SelectItem value="3">Guest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                          Created At
                        </Label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            value={new Date(user.created_at).toLocaleString()}
                            disabled
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                          Updated At
                        </Label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            value={new Date(user.updated_at).toLocaleString()}
                            disabled
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                    {user.deleted_at && (
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                          Deleted At
                        </Label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            value={new Date(user.deleted_at).toLocaleString()}
                            disabled
                            className="pl-10"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetailPage;
