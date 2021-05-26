import Button from "../components/Button";
import { decrement, increment } from "../redux/Counter.slice";
import { useAppDispatch } from "../redux/hook";

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>HOMEPAGE</h1>
      <Button event={() => dispatch(increment())}>INCREMENT</Button>
      <Button event={() => dispatch(decrement())}>DECREMENT</Button>
    </>
  );
}
