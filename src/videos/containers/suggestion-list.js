import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout.js';
import Empty  from '../components/empty.js';
import Separator from '../components/vertical-separator.js'

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias"/>
    itemSeparator = ()=><Separator />
    render() {
        const list = [
            {
                title: 'Advengers',
                key: '1'
            },
            {
                title: 'Batman Return',
                key: '2'
            },
            {
                title: 'AntMan',
                key: '3'
            }
        ]
        return (
            <Layout
            title = "Recomendado para ti">
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                />
            </Layout>
        )
    }
}

export default SuggestionList;