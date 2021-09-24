import { useState, useCallback, memo } from 'react';
import { Child1 } from '../components/Child1';
import { Child4 } from '../components/Child4';

const Index = memo(() => {
  console.log('indexレンダリング');

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  }

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <main>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </main>
  );
});

export default Index;
