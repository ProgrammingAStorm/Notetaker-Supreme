import { MantineProvider, Text } from '@mantine/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
