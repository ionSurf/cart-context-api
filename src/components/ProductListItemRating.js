import React from 'react';

export const ProductListItemRating = rating => {
    let starsRating = '';
    let i = 0;
    while ( i < 5 ) {
        if ( i < rating) {
            starsRating += '&#9733; '
        } else {
            starsRating += '&#9734; '
        }
    }
    return (
        <small class="text-muted">
            {starsRating}
        </small>
    )
}