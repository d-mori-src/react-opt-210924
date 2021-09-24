# 再レンダリング最適化
　
### 使用したもの
- create-react-app "react": "^17.0.2"
- memo
- useCallback
 
```
$ git clone https://github.com/d-mori-src/react-opt-210924.git
$ cd react-opt-210924
$ npm install
$ npm start
```
　
#### 最適化① メモ化
メモ化しておくと変更ない再レンダリングされないため、パフォーマンス最適化できる。<br>
テキストベースや比較的小規模なものにはする必要はない。
　
```jsx
export const Child1 = memo(() => {});
```
　
#### 最適化② useCallback
関数をpropsに渡す時、コンポーネントにメモ化していても<br>
再レンダリングされる原因は関数の再生成。<br>
それを防ぐために関数をメモ化する必要がある。

```jsx
const onClickReset = useCallback(() => {
    setNum(0);
}, []);
```
　
#### おまけ　　useMemo
使用頻度は高くないが変数のメモ化も用意されている。
　
```jsx
const sum = useMemo(() => {
    return 1 + 3;
});
```