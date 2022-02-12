import MainScreen from '../main-screen-component/main-screen-component';

type AppScreenProps = {
  offersCount: number;
  offersShown: number;
}

function App({ offersCount, offersShown }: AppScreenProps): JSX.Element {
  return (
    <MainScreen offersCount={offersCount} offersShown={offersShown} />
  );
}

export default App;
