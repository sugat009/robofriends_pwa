import React, {Component} from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundry';
import Header from './Header';

import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    getFilteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render() {
        const {onSearchChange, isPending} = this.props;

        return (
            <div className='tc'>
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    {isPending ? <h1>Loading</h1> :
                        <ErrorBoundary>
                            <CardList robots={this.getFilteredRobots()}/>
                        </ErrorBoundary>
                    }
                </Scroll>
            </div>
        );
    }

}

export default MainPage;
