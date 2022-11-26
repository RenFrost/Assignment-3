export const navbarStyles = {
    drawer: {
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: '#101F33',
          color: 'rgba(255,255,255,0.7)'
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
        text: {
            '& span': {
                marginLeft: "10px",
                fontWeight: "680",
                fontSize: '16px',
            }
        }
}