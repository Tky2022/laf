import { Module } from '@nestjs/common'
import { ApplicationController } from './application.controller'
import { ApplicationService } from './application.service'
import { ApplicationTaskService } from './application-task.service'
import { InstanceService } from '../instance/instance.service'
import { JwtService } from '@nestjs/jwt'
import { FunctionService } from '../function/function.service'
import { EnvironmentVariableService } from './environment.service'
import { EnvironmentVariableController } from './environment.controller'
import { StorageModule } from '../storage/storage.module'
import { DatabaseModule } from 'src/database/database.module'
import { GatewayModule } from 'src/gateway/gateway.module'
import { ApplicationConfigurationService } from './configuration.service'
import { TriggerService } from 'src/trigger/trigger.service'
import { WebsiteService } from 'src/website/website.service'

@Module({
  imports: [StorageModule, DatabaseModule, GatewayModule],
  controllers: [ApplicationController, EnvironmentVariableController],
  providers: [
    ApplicationService,
    ApplicationTaskService,
    InstanceService,
    JwtService,
    FunctionService,
    EnvironmentVariableService,
    ApplicationConfigurationService,
    TriggerService,
    WebsiteService,
  ],
  exports: [ApplicationService],
})
export class ApplicationModule {}
