import { LoginForm } from "@/components/auth/login-form";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#272727] to-[#000000] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
