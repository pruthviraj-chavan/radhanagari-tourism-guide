
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Hotels & Homestays', href: '/radhanagari-hotels-homestays' },
  { label: 'Wildlife Safari', href: '/radhanagari-wildlife-safari' },
  { label: 'Animals', href: '/radhanagari-animals' },
  { label: 'Food Guide', href: '/radhanagari-food-guide' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-forest">Radhanagari</span>
          </Link>
        </div>
        
        {!isMobile ? (
          <nav className="hidden space-x-4 md:flex">
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className={`flex items-center gap-1 ${isActive(item.href) ? 'font-medium text-forest' : 'text-gray-600'}`}>
                        {item.label} <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.href}>
                          <DropdownMenuItem>{child.label}</DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-forest underline decoration-2 underline-offset-8'
                        : 'text-gray-600 hover:text-forest'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        ) : (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <span className="text-xl font-bold text-forest">Radhanagari</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-forest'
                        : 'text-gray-600 hover:text-forest'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
