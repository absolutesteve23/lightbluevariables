(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#ADD8E6"; // Body of Subroutine R - 110 #640000
        variableStyle.colourSecondary = "#ADD8E6"; //
        variableStyle.colourTertiary = "#ADD8E6"; // Edge of Subroutine R - 70

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
