import { Box, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import categoryApi from 'api/categoryApi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },

    typography: {
        paddingBottom: theme.spacing(1),
    },

    menu: {
        '& > li': {
            paddingLeft: '0',
            paddingRight: '0',
            transition: 'all .25s',

            '&:hover': {
                color: theme.palette.primary.dark,
                cursor: 'pointer',
            },
        },
    },
}))

function FilterByCategory(props) {
    const { onChange = null } = props
    const classes = useStyles()
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll()
                setCategoryList(list.map(x => ({
                    id: x.id,
                    name: x.name,
                })))
            } catch (error) {
                console.log('Failed to fetch category list', error)
            }
        })()
    }, [])

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category)
        }
    }

    return (
        <Box className={classes.root} minHeight="229px">
            <Typography
                variant="subtitle2"
                className={classes.typography}>
                DANH MỤC SẢN PHẨM
            </Typography>
            <List className={classes.menu}>
                {categoryList.map(category => (
                    <ListItem
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <Typography variant="body2">{category.name}</Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default FilterByCategory;