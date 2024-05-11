//usar el comando del sistema hyperctl para obtener la lista de workspaces
//y mostrarla en un panel de selección

const { exec } = require('child_process');

exec('hyprctl workspaces -j', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    let result = JSON.parse(stdout);
    let items = result.map(item => {
        return {
            label: item.name,
            windows: item.windows
        }
    });
    // crear un panel de selección
    let Buttons = items.map(item => {
        return `(button :onclick "hyprctl dispatch workspace ${item.label}"
        (label :text "${item.label}"))`})
    console.log(`(box :class "workspaces" ${Buttons.join(' ')})`);
    console.error(stderr);
})