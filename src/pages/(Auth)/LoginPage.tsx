import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import RegisterForm from "./RegisterPage";
import useAuthStore from "@/stores/auth-store";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 6 characters"),
});

type formLogin = z.infer<typeof formSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthStore();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const form = useForm<formLogin>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleTogglePassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const onSubmit = (value: formLogin) => {
    console.log("TEST", value);

    if (value.email !== "test@test.com" || value.password !== "test") {
      toast.error("Invalid email or password", {
        description: "Please try again",
        position: "top-right",
        duration: 1500,
      });
      return;
    }

    setIsAuthenticated(true);
    navigate({ to: "/" });
  };

  const handleRegister = () => {
    setIsRegister(true);
  };

  const handleBackToLogin = () => {
    setIsRegister(false);
  };

  if (isRegister) {
    return <RegisterForm onBack={handleBackToLogin} />;
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center text-2xl font-bold">
        <CardTitle>Requisition System</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <InputGroup>
                        <InputGroupInput placeholder="Email" {...field} />
                        <InputGroupAddon>
                          <Mail />
                        </InputGroupAddon>
                      </InputGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <InputGroup>
                        <InputGroupInput
                          type={isShowPassword ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                        />
                        <InputGroupAddon>
                          <Lock />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                          {isShowPassword ? (
                            <Eye
                              className="cursor-pointer"
                              onClick={handleTogglePassword}
                            />
                          ) : (
                            <EyeOff
                              className="cursor-pointer"
                              onClick={handleTogglePassword}
                            />
                          )}
                        </InputGroupAddon>
                      </InputGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>

          <div className="flex items-center justify-center gap-2 w-full">
            <p className="text-center text-xs">Don't have an account?</p>
            <Button
              variant="link"
              className="p-0 text-xs hover:cursor-pointer"
              onClick={handleRegister}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default LoginPage;
