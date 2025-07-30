"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "@/navigation"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const changeLocale = (newLocale: string) => {
    router.replace(`/${newLocale}${pathname}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => changeLocale('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => changeLocale('de')}>
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => changeLocale('uk')}>
          Українська
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
