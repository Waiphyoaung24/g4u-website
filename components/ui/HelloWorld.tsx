interface HelloWorldProps {
  name?: string;
  className?: string;
}

export default function HelloWorld({ name = "World", className = "" }: HelloWorldProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Hello, {name}!
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Welcome to your Next.js landing page
      </p>
    </div>
  );
}
