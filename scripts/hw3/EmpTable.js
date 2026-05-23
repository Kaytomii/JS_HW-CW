class EmpTable {
    constructor(employers) {
        this.employers = employers;
    }

    getHtml() {
        let html = "<table border='1' cellspacing='0' cellpadding='6'>";
        html += "<tr><th>Name</th><th>Age</th><th>Position</th></tr>";

        this.employers.forEach(e => {
            html += `<tr>
                        <td>${e.name}</td>
                        <td>${e.age}</td>
                        <td>${e.position}</td>
                     </tr>`;
        });

        html += "</table>";
        return html;
    }
}

export default EmpTable;