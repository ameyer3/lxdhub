import { RemoteDto, ResponseDto } from '@lxdhub/common';
import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { RemoteService } from './remote.service';

/**
 * The Remote-Controller, which is the API
 * interface for Remote-Operations.
 */
@Controller('/api/v1/remote')
export class RemoteController {
  constructor(
    private readonly remoteService: RemoteService
  ) { }

  /**
   * Returns all remotes
   */
  @Get('/')
  @ApiResponse({
    type: ResponseDto,
    status: 200
  })
  async findAll(): Promise<ResponseDto<RemoteDto[]>> {
    return await this.remoteService.findAll();
  }
}
