const generateManifest = () => {
    const manifestArr = [
        '#EXTM3U',
        '#EXT-X-VERSION:3',
        '#EXT-X-TARGETDURATION:10',
        '#EXT-X-MEDIA-SEQUENCE:0',
        '#EXTINF:10.004900,',
        'https://muse-library.s3.ap-south-1.amazonaws.com/s14s12_go0.ts?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiSDBGAiEAt1ANlManQI%2F%2BRyKFiVudQD%2FYHtSAQT%2BdtBnf2Et29BsCIQDvtsF4kTUEOM4ASQk2zk8f87zaD3QwmuOZj1VK%2BlGFbyrkAgh7EAAaDDA4OTI2NzkyMjY1OSIMT7ZIVjA%2FNOIjwVSVKsEC4y2IqohGvtGwz9Zjp4WaWjyP2h%2BTAAI%2FIjxcMR%2B9I8ogAYHkTVKt1YJPqhKsj4mWu95uRnnvITk03X9g5Xi%2F6ExD7jsDG6rW9K%2FW%2FiKMzDUQ%2Bl2c%2F9cz15x8mvLIDaNTsNJNJOW0YIgTSgNMT62XR6P6qZYCFwdWaO6l0zPM9AWViXRSyLoNAUQErhc21R5leNZQ0zutYbW%2BL%2Bwo8TFNva2acGn29jXwiCQ6ZyME828kU0LiRSkHuCuNB4HOrtdtmMnopwaFuDig6hiZiovLKh5uxO2Ugyt%2BNnzaQECaTPhQDIC0vQUz0YvuiD2c2RZSk6e6lbouIRH%2BnI5H94mgVck34JNn5Yy2EtPcDFWIFNHz5Gv06JDamfPIAQPf%2BaZrlBgSl37E5FNanR2L92s7Ob0RoMiu8HGn1ReHpMwikOdRMOeixJ8GOrICAmnnaTBQ4M84liuPq5sqAFuvxkY7kvLloYbK9XWrIBpnH%2Blo26rEqhPFXFbtVZrmoaSTABGJrjgJ%2F8%2FVz%2Bo9enabEtF%2ByJIHs5IQcTslYBWWCjQMKWR9YZJqoT2XujMfk%2FZfXCCXGwSglTY6BC0DO4%2B0DslyvXUfUFOWpu9U9LamtNmseLdCwUMpoExBlQgvsLRefbS4HhMoZe7XsPmRDiseeAw7BFB%2FwRVs12YaghdtBqZfyl%2FLQoJmk5lBlLqlt3JheZyevsLO3t1vCB6whUSBOg7x5up8v7R84no0clf%2Bf%2B8rvD3%2BAPcQLEvdUOYtZFf8MQLfHLinh6zmOtZoH4jkjKFwUdlq3IL%2BbHAOnwv1qrURHO6H%2B7kmaCCxU%2BDgwDSg3TsDm9DkC5Su5%2FD9LI1Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230218T194744Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARJSGIM3R4ARZLPHH%2F20230218%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=9bfdbb4f6d454d3a158e9dd49724d558a33e06ee009f84e2efceabe7985b0dac',
        '#EXT-X-ENDLIST'
    ];

    return manifestArr.join('\n');
};

export default generateManifest;