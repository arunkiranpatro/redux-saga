import React from 'react';
import Layout from './UILibrary/Layout';
import AutoComplete from './UILibrary/AutoComplete';

function getResults(x) {
    const list = ['arun', 'ramya', 'ram', 'wk'];
    const p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            const results = list.filter(value => {
                if (value.search(x) != -1) {
                    return true;
                }
                return false;
            });
            resolve(results);
        }, 1000);
    });

    return p;
}

export default function SampleComponent() {
    return (
      <Layout columns={1}>
        Hello Dynamic Container
        <AutoComplete getResults={getResults} />
      </Layout>
    );
}
