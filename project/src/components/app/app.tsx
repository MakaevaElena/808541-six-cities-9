import MainScreen from '../main-screen-component/main-screen-component';

type MainScreenProps = {
  offersCount: number;
}

function App({ offersCount }: MainScreenProps): JSX.Element {
  return (
    <MainScreen offersCount={offersCount} />
  );
}

export default App;
