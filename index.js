(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("light-bluevariables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#000000"; // Body of Subroutine R - 110 #000000
        variableStyle.colourSecondary = "#000000"; //
        variableStyle.colourTertiary = "#000000"; // Edge of Subroutine R - 70

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
