import AddLink from '@/components/add-link'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/addLink')({
  component: AddLink
})