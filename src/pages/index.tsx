import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 3,
});

export default function Home() {
  return (
   <Button>Hello Word</Button>
  )
}

