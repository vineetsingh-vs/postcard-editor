import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { PostcardHttpService } from "@app/core/services/http/postcard-http.service";

const modules = [HttpClientModule];

const services = [PostcardHttpService];

@NgModule({
  declarations: [],
  providers: [...services],
  imports: [...modules],
  exports: [...modules]
})
export class CoreModule {}
