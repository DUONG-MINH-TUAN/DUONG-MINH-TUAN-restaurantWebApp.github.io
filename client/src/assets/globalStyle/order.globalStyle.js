import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
section {
display: flex;
}
body {
            font-family: Arial, sans-serif;
            margin: 20px;
            display: flex;
            
        }
        .sidebar {
            width: 200px;
            background-color: #f4f4f4;
            border-radius: 8px;
            padding: 20px;
            margin-right: 20px;
        }

        .sidebar a {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 10px;
        }

        .sidebar a:hover {
            background-color: #ddd;
        }

        .sidebar .spacer {
            height: 200px;
        }

        .sidebar .logout {
            color: red;
        }

        .dashboard {
            max-width: 1200px;
            flex: 1;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            padding: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }
        th {
            background-color: #f1c40f;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        select {
            padding: 6px;
            border-radius: 4px;
        }
        .sidebar-title {
            color: goldenrod;
            font-family: 'Lavishly Yours', cursive;  /* Apply the Lavishly Yours font */
            font-size: 2.5em;  /* Adjust the size as needed */
        }`;


export default GlobalStyle;