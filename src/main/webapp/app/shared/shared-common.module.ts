import { NgModule } from '@angular/core';

import { TestealunosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestealunosSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestealunosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestealunosSharedCommonModule {}
