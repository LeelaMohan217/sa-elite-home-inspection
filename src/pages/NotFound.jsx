import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Button from '../components/Button'

function NotFound() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="404"
        title="This page isn't"
        accent="here."
        subtitle="The link may be broken or the page may have moved. Let's get you back on track."
      >
        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button to="/" icon={ArrowRight} className="w-full sm:w-auto">
            Go to Home
          </Button>
          <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </div>
      </PageHero>
    </div>
  )
}

export default NotFound
