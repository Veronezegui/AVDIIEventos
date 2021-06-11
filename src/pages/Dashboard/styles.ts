import styled from 'styled-components'

export const Container = styled.div`
    body {
        height: 100%;
    }
    
    form {
        display: flex;
        flex-direction:column;
        align-text: center;
        width: 600px;
        justify-content: space-between;
        padding: 40px;
        margin: 50px auto;
        border: 1px solid black;

        h2 {
            margin-bottom: 20px;
        }

        input {
            width: 100%;
            align-text: center;
            margin-bottom: 5px;
            padding: 5px;
        }

        button {
            width: 80px;
            height: 40px;
            align-items: center;
        }
        
    }

    table {
        margin: 50px auto;
        text-align: center;
        align-items: center;

        button {
            height: 40px;
            margin-left: 10px;
            padding: 5px;
        }
       
        tr {
            padding: 10px;
            width: 500px;
        }
    }
    td {
        padding: 10px;
        border: 1px solid black;
        border-radius: 4px;
        justify-content: center;
    }



`