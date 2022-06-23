import {fetchProfileData} from "../../api";

const fakeData = fetchProfileData();

function SomeConvenientWidget() {
    const response = fakeData.data.read();
    return <p>{response.data}</p>;
}

export default SomeConvenientWidget;
