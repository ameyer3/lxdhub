import { Factory, ImageListItemDto } from '@lxdhub/common';
import { Image } from '@lxdhub/db';
import { Component } from '@nestjs/common';

/**
 * Factory which procudes ImageListItemDtos
 */
@Component()
export class ImageListItemFactory extends Factory<ImageListItemDto> {
    /**
     * Maps the given database image with the ImageListDto and returns
     * the instance
     * @param image The database image, which should be mapped with a ImageListItemDto
     */
    entityToDto(image: Image): ImageListItemDto {
        const imageListItem = new ImageListItemDto();
        imageListItem.id = image.id;
        imageListItem.fingerprint = image.fingerprint;
        imageListItem.uploadedAt = image.uploadedAt;
        imageListItem.description = image.description;
        return imageListItem;
    }
}
