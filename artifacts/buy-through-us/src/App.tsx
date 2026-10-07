import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { SiteLayout } from '@/components/site-shell';
import {
  ContactPage,
  CoveragePage,
  FaqPage,
  HomePage,
  HowItWorksPage,
  PlansPage,
  PolicyPage,
  RefurbishedPage,
  RolesPage,
  ServicesPage,
} from '@/pages/marketing-pages';

const queryClient = new QueryClient();

function Router() {
  return (
    <RoutedErrorBoundary>
      <SiteLayout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/roles" component={RolesPage} />
          <Route path="/plans" component={PlansPage} />
          <Route path="/refurbished" component={RefurbishedPage} />
          <Route path="/coverage" component={CoveragePage} />
          <Route path="/how-it-works" component={HowItWorksPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy">{() => <PolicyPage path="/privacy" />}</Route>
          <Route path="/terms">{() => <PolicyPage path="/terms" />}</Route>
          <Route path="/warranty">{() => <PolicyPage path="/warranty" />}</Route>
          <Route component={NotFound} />
        </Switch>
      </SiteLayout>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
