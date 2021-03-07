import React from 'react'
import "./SwipeButons.css"
import ReplyIcon from '@material-ui/icons/Reply'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
function SwipeButtons() {
    return (
        <div className="swipeButton">
            <IconButton className="swipeButton__repeat">
                <ReplyIcon fontSize="large"></ReplyIcon>
            </IconButton>
            <IconButton className="swipeButton__left">
                <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className="swipeButton__star">
                <StarRateIcon fontSize="large"></StarRateIcon>
            </IconButton>
            <IconButton className="swipeButton__right">
                <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className="swipeButton__lightning">
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
