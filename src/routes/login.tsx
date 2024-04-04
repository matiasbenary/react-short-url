import { TabsDemo } from '@/components/tabs-demo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: TabsDemo
})