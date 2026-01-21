import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { OAuthButtons } from "@/components/auth/OAuthButtons";
import { signupSchema, SignupFormData, getAuthErrorMessage } from "@/lib/auth-validation";
import { toast } from "sonner";

export default function SignupPage() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      password: "",
    },
  });

  const password = watch("password");

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);

    try {
      const { error } = await signUp(data.email, data.password, {
        fullName: `${data.firstName} ${data.lastName}`.trim(),
        company: data.company,
      });

      if (error) {
        const friendlyMessage = getAuthErrorMessage(error.message);
        toast.error(friendlyMessage);
        return;
      }

      setEmailSent(true);
      toast.success("Check your email to confirm your account!");
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Password strength indicators
  const passwordChecks = {
    length: password?.length >= 8,
    uppercase: /[A-Z]/.test(password || ""),
    lowercase: /[a-z]/.test(password || ""),
    number: /[0-9]/.test(password || ""),
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-sm text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-2xl font-semibold mb-2">Check your email</h1>
          <p className="text-muted-foreground mb-6">
            We've sent a confirmation link to your email address. Please click the link to verify your account.
          </p>
          <Button variant="outline" asChild>
            <Link to="/auth/login">Back to Sign in</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <Link to="/" className="inline-block mb-8">
            <span className="font-display text-2xl font-semibold">FashionOS</span>
          </Link>

          <h1 className="font-display text-2xl font-semibold mb-2">Create your account</h1>
          <p className="text-muted-foreground mb-8">Start managing your fashion operations today.</p>

          {/* OAuth Buttons */}
          <OAuthButtons mode="signup" />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  {...register("firstName")}
                  aria-invalid={!!errors.firstName}
                  disabled={isLoading}
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  {...register("lastName")}
                  aria-invalid={!!errors.lastName}
                  disabled={isLoading}
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                aria-invalid={!!errors.email}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company <span className="text-muted-foreground">(optional)</span></Label>
              <Input
                id="company"
                placeholder="Your brand or company"
                {...register("company")}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                aria-invalid={!!errors.password}
                disabled={isLoading}
              />
              {errors.password && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.password.message}
                </p>
              )}
              
              {/* Password strength indicators */}
              {password && (
                <div className="grid grid-cols-2 gap-1 text-xs mt-2">
                  <span className={passwordChecks.length ? "text-primary" : "text-muted-foreground"}>
                    {passwordChecks.length ? "✓" : "○"} 8+ characters
                  </span>
                  <span className={passwordChecks.uppercase ? "text-primary" : "text-muted-foreground"}>
                    {passwordChecks.uppercase ? "✓" : "○"} Uppercase
                  </span>
                  <span className={passwordChecks.lowercase ? "text-primary" : "text-muted-foreground"}>
                    {passwordChecks.lowercase ? "✓" : "○"} Lowercase
                  </span>
                  <span className={passwordChecks.number ? "text-primary" : "text-muted-foreground"}>
                    {passwordChecks.number ? "✓" : "○"} Number
                  </span>
                </div>
              )}
            </div>

            <Button variant="hero" className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight size={16} />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="underline hover:text-foreground">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
            .
          </p>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-foreground font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center p-12">
        <div className="max-w-md text-primary-foreground">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Join the future of fashion operations
          </h2>
          <p className="text-primary-foreground/70">
            Get started with a free account. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}
