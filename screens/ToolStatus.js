function ToolStatus() {
  const { toolData } = useContext(ToolContext);

  return (
    <View>
      <Text>Current user: {toolData.user}</Text>
      <Text>Current tool: {toolData.tool}</Text>
    </View>
  );
}
