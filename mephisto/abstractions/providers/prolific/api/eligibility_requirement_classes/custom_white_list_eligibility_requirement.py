from typing import List

from .base_eligibility_requirement import BaseEligibilityRequirement


class CustomWhitelistEligibilityRequirement(BaseEligibilityRequirement):
    """
    Details https://docs.prolific.co/docs/api-docs/public/#tag/Requirements/Requirements-object
    """
    prolific_cls_name = 'web.eligibility.models.CustomWhitelistEligibilityRequirement'

    def __init__(self, white_list: List[str]):
        self.white_list = white_list
