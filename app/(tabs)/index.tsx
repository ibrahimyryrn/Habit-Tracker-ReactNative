import { useAuth } from "@/lib/auth-context";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Index = () => {
  const { signOut } = useAuth();
  return (
    <View style={styles.view}>
      <Text>Index</Text>
      <Button mode="text" onPress={signOut} icon={"logout"}>
        Sign Out
      </Button>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
