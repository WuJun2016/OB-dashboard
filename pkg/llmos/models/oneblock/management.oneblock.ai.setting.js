import { LLMOS } from '@pkg/llmos/types/types';
import { clone } from '@shell/utils/object';
import { PRODUCT_NAME as HARVESTER_PRODUCT } from '../../config/product';
import ManagementSetting from '~/shell/models/management.llmos.ai.setting';

export default class OBManagementSetting extends ManagementSetting {
  get detailLocation() {
    const detailLocation = clone(this._detailLocation);

    detailLocation.params.resource = LLMOS.SETTING;

    return detailLocation;
  }

  get doneOverride() {
    const detailLocation = clone(this._detailLocation);

    delete detailLocation.params.namespace;
    delete detailLocation.params.id;
    detailLocation.params.resource = LLMOS.SETTING;
    detailLocation.name = `${ HARVESTER_PRODUCT }-c-cluster-resource`;

    return detailLocation;
  }

  get doneRoute() {
    return null;
  }

  get parentNameOverride() {
    return this.$rootGetters['i18n/t'](`typeLabel."${ LLMOS.SETTING }"`, { count: 1 })?.trim();
  }

  get parentLocationOverride() {
    return this.doneOverride;
  }

  get doneParams() {
    return {
      product:  this.$rootGetters['productId'],
      cluster:  this.$rootGetters['clusterId'],
      resource: LLMOS.SETTING,
    };
  }
}
