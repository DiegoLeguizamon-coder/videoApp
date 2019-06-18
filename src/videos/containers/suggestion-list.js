import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout.js'

class SuggestionList extends Component {
    render() {
        const list = [
            {
                title: 'Peli 1',
                key: '1'
            },
            {
                title: 'Peli 2',
                key: '2'
            }
        ]
        return (
            <Layout
            title = "Recomendado para ti">
                <FlatList
                    data={list}
                    ListEmptyComponent={()=> <Text>No hay elementos en la lista</Text>}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                />
            </Layout>
        )
    }
}

export default SuggestionList;